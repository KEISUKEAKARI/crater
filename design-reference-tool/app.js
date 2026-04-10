// グローバル状態管理
const state = {
    selectedImages: [],
    designTasteUrls: [{url: '', comment: ''}],  // セクション1：URL + コメント
    urls: [{url: '', comment: ''}],              // セクション2：URL + コメント
    additionalNotes: '',     // セクション2.5 の追加指示
};

// DOMエレメント
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const selectedImagesDiv = document.getElementById('selected-images');
const noImagesMsg = document.getElementById('no-images-msg');
const designTasteUrlsContainer = document.getElementById('design-taste-urls-container');
const addDesignTasteUrlBtn = document.getElementById('add-design-taste-url-btn');
const urlInputsContainer = document.getElementById('url-inputs-container');
const addUrlBtn = document.getElementById('add-url-btn');
const additionalNotesInput = document.getElementById('additional-notes');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const promptText = document.getElementById('prompt-text');
const pinterestAuthBtn = document.getElementById('pinterest-auth-btn');

// =====================
// 初期化
// =====================
function init() {
    setupEventListeners();
    renderDesignTasteUrls();
    renderUrlInputs();
}

// =====================
// イベントリスナー設定
// =====================
function setupEventListeners() {
    // ファイルアップロード
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    uploadBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);

    // URL操作
    addDesignTasteUrlBtn.addEventListener('click', addDesignTasteUrl);
    addUrlBtn.addEventListener('click', addUrlInput);

    // 追加指示テキスト
    additionalNotesInput.addEventListener('input', (e) => {
        state.additionalNotes = e.target.value;
    });
    additionalNotesInput.addEventListener('change', (e) => {
        state.additionalNotes = e.target.value;
    });

    // プロンプト生成
    generateBtn.addEventListener('click', generatePrompt);
    copyBtn.addEventListener('click', copyPrompt);

    // Pinterest認証
    pinterestAuthBtn.addEventListener('click', handlePinterestAuth);
}

// =====================
// ファイルアップロード処理
// =====================
function handleDragOver(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#667eea';
    uploadArea.style.background = '#f0f4ff';
}

function handleDragLeave(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#ccc';
    uploadArea.style.background = '#fafafa';
}

function handleDrop(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#ccc';
    uploadArea.style.background = '#fafafa';

    const files = e.dataTransfer.files;
    processFiles(files);
}

function handleFileSelect(e) {
    const files = e.target.files;
    processFiles(files);
}

function processFiles(files) {
    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = {
                    id: Date.now() + Math.random(),
                    src: e.target.result,
                    name: file.name,
                    comment: '', // 画像についてのコメント
                };
                state.selectedImages.push(imageData);
                renderImages();
            };
            reader.readAsDataURL(file);
        }
    }
    fileInput.value = '';
}

// =====================
// 画像表示
// =====================
function renderImages() {
    if (state.selectedImages.length === 0) {
        selectedImagesDiv.innerHTML = '';
        noImagesMsg.style.display = 'block';
        return;
    }

    noImagesMsg.style.display = 'none';
    selectedImagesDiv.innerHTML = state.selectedImages.map(img => `
        <div class="image-item">
            <img src="${img.src}" alt="${img.name}">
            <div class="image-meta">
                <p class="image-name">${img.name}</p>
                <textarea
                    class="image-comment"
                    placeholder="この画像のどこが参考になるか、改善点など（任意）"
                    onchange="updateImageComment('${img.id}', this.value)"
                >${img.comment}</textarea>
            </div>
            <button class="image-remove" onclick="removeImage('${img.id}')">×</button>
        </div>
    `).join('');
}

function updateImageComment(id, comment) {
    const img = state.selectedImages.find(i => i.id === id);
    if (img) {
        img.comment = comment;
    }
}

function removeImage(id) {
    state.selectedImages = state.selectedImages.filter(img => img.id !== id);
    renderImages();
}

// =====================
// セクション1: デザイン雰囲気URL管理
// =====================
function renderDesignTasteUrls() {
    designTasteUrlsContainer.innerHTML = state.designTasteUrls.map((item, index) => `
        <div class="url-input-group">
            <div>
                <input
                    type="url"
                    placeholder="https://example.com"
                    value="${item.url}"
                    onchange="updateDesignTasteUrl(${index}, 'url', this.value)"
                >
            </div>
            <textarea
                class="url-comment"
                placeholder="なぜこれを参考にしたか、好きなところ・嫌なところなど（任意）"
                onchange="updateDesignTasteUrl(${index}, 'comment', this.value)"
            >${item.comment}</textarea>
            ${state.designTasteUrls.length > 1 ? `
                <button class="url-remove-btn" onclick="removeDesignTasteUrl(${index})">削除</button>
            ` : ''}
        </div>
    `).join('');
}

function updateDesignTasteUrl(index, field, value) {
    state.designTasteUrls[index][field] = value;
}

function addDesignTasteUrl() {
    state.designTasteUrls.push({url: '', comment: ''});
    renderDesignTasteUrls();
}

function removeDesignTasteUrl(index) {
    state.designTasteUrls.splice(index, 1);
    renderDesignTasteUrls();
}

// =====================
// セクション2: レイアウトURL管理
// =====================
function renderUrlInputs() {
    urlInputsContainer.innerHTML = state.urls.map((item, index) => `
        <div class="url-input-group">
            <div>
                <input
                    type="url"
                    placeholder="https://example.com"
                    value="${item.url}"
                    onchange="updateUrl(${index}, 'url', this.value)"
                >
            </div>
            <textarea
                class="url-comment"
                placeholder="このレイアウトのどこが参考になるか、改善点など（任意）"
                onchange="updateUrl(${index}, 'comment', this.value)"
            >${item.comment}</textarea>
            ${state.urls.length > 1 ? `
                <button class="url-remove-btn" onclick="removeUrl(${index})">削除</button>
            ` : ''}
        </div>
    `).join('');
}

function updateUrl(index, field, value) {
    state.urls[index][field] = value;
}

function addUrlInput() {
    state.urls.push({url: '', comment: ''});
    renderUrlInputs();
}

function removeUrl(index) {
    state.urls.splice(index, 1);
    renderUrlInputs();
}

// =====================
// プロンプト生成
// =====================
async function generatePrompt() {
    const images = state.selectedImages.length;
    const urls = state.urls.filter(url => url.trim() !== '').length;
    const designTasteUrls = state.designTasteUrls.filter(url => url.trim() !== '').length;
    const notes = state.additionalNotes.trim() !== '';

    if (images === 0 && urls === 0 && designTasteUrls === 0 && !notes) {
        alert('参考画像、URL、または追加の指示を入力してください');
        return;
    }

    try {
        generateBtn.disabled = true;
        generateBtn.textContent = '生成中...';

        // バックエンドに API リクエスト
        const response = await fetch('/api/generate-prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                images: state.selectedImages.map(img => ({ name: img.name, src: img.src })),
                designTasteUrls: state.designTasteUrls,
                urls: state.urls,
                additionalNotes: state.additionalNotes
            })
        });

        if (!response.ok) {
            throw new Error('プロンプト生成に失敗しました');
        }

        const data = await response.json();
        const prompt = data.prompt;

        // プロンプトを表示
        promptText.textContent = prompt;
        promptText.classList.remove('placeholder');
        copyBtn.disabled = false;
    } catch (error) {
        console.error('プロンプト生成エラー:', error);
        alert('プロンプト生成に失敗しました: ' + error.message);
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = 'プロンプトを生成';
    }
}

// =====================
// プロンプトコピー
// =====================
function copyPrompt() {
    const text = promptText.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'コピーしました！';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
}

// =====================
// Pinterest認証
// =====================
async function handlePinterestAuth() {
    try {
        const response = await fetch('/auth/start');
        const data = await response.json();

        if (data.authUrl) {
            // Pinterest 認証ページにリダイレクト
            window.location.href = data.authUrl;
        } else {
            alert('Pinterest認証の準備中です。Pinterest API キーの設定をお待ちください。');
        }
    } catch (error) {
        console.error('Pinterest認証エラー:', error);
        alert('Pinterest認証に失敗しました。後でもう一度試してください。');
    }
}

// =====================
// 初期化実行
// =====================
init();
