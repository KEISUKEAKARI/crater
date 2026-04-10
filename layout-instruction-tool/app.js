// レイアウト指示ツール - シンプル版
const app = {
    // キャンバス上のセクション一覧
    canvasSections: [],

    // 初期化
    async init() {
        await this.loadSections();
        this.setupCanvasDrop();
    },

    // sections/フォルダから自動読み込み（APIがあれば使う、なければフォールバック）
    async loadSections() {
        let sections;
        try {
            const res = await fetch('/api/sections');
            if (res.ok) {
                sections = await res.json();
            } else {
                throw new Error('API not available');
            }
        } catch {
            // APIが使えない場合（Python serverなど）はフォールバック
            sections = [
                { file: 'hero.svg', name: 'ヒーロー' },
                { file: 'text-image.svg', name: 'テキスト+画像' },
                { file: '3col-cards.svg', name: '3カラムカード' },
                { file: '2col-text.svg', name: '2カラムテキスト' },
                { file: 'faq.svg', name: 'FAQ' },
                { file: 'cta.svg', name: 'CTA' },
                { file: 'spacer.svg', name: '余白' },
            ];
        }

        this.renderSections(sections);
    },

    // 右パネルにセクション一覧を表示
    renderSections(sections) {
        const list = document.getElementById('sectionsList');
        list.innerHTML = '';

        sections.forEach(section => {
            const thumb = document.createElement('div');
            thumb.className = 'section-thumb';
            thumb.draggable = true;
            thumb.innerHTML = `
                <img src="sections/${section.file}" alt="${section.name}">
                <div class="section-thumb-name">${section.name}</div>
            `;

            thumb.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify({
                    type: 'new',
                    file: section.file,
                    name: section.name
                }));
            });

            list.appendChild(thumb);
        });
    },

    // キャンバスへのドロップ設定
    setupCanvasDrop() {
        const canvas = document.getElementById('canvas');

        canvas.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.showDropIndicator(e);
        });

        canvas.addEventListener('dragleave', () => {
            this.removeDropIndicator();
        });

        canvas.addEventListener('drop', (e) => {
            e.preventDefault();
            this.removeDropIndicator();

            const data = JSON.parse(e.dataTransfer.getData('text/plain'));
            const dropIndex = this.getDropIndex(e);

            if (data.type === 'new') {
                this.canvasSections.splice(dropIndex, 0, {
                    file: data.file,
                    name: data.name
                });
            } else if (data.type === 'reorder') {
                const fromIndex = data.index;
                const item = this.canvasSections.splice(fromIndex, 1)[0];
                const adjustedIndex = fromIndex < dropIndex ? dropIndex - 1 : dropIndex;
                this.canvasSections.splice(adjustedIndex, 0, item);
            }

            this.renderCanvas();
        });
    },

    // ドロップ位置を計算
    getDropIndex(e) {
        const canvas = document.getElementById('canvas');
        const sections = canvas.querySelectorAll('.canvas-section');

        for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            const midY = rect.top + rect.height / 2;
            if (e.clientY < midY) return i;
        }

        return this.canvasSections.length;
    },

    // ドロップインジケータ
    showDropIndicator(e) {
        this.removeDropIndicator();

        const canvas = document.getElementById('canvas');
        const sections = canvas.querySelectorAll('.canvas-section');
        const indicator = document.createElement('div');
        indicator.className = 'drop-indicator';

        const dropIndex = this.getDropIndex(e);

        if (dropIndex < sections.length) {
            sections[dropIndex].before(indicator);
        } else {
            canvas.appendChild(indicator);
        }
    },

    removeDropIndicator() {
        document.querySelectorAll('.drop-indicator').forEach(el => el.remove());
    },

    // キャンバスを描画
    renderCanvas() {
        const canvas = document.getElementById('canvas');

        if (this.canvasSections.length === 0) {
            canvas.innerHTML = '<p class="canvas-empty">右からセクションをドラッグしてください</p>';
            return;
        }

        canvas.innerHTML = '';

        this.canvasSections.forEach((section, index) => {
            const el = document.createElement('div');
            el.className = 'canvas-section';
            el.draggable = true;
            el.innerHTML = `
                <img src="sections/${section.file}" alt="${section.name}">
                <button class="delete-btn" onclick="app.deleteSection(${index})">×</button>
            `;

            el.addEventListener('dragstart', (e) => {
                el.classList.add('dragging');
                e.dataTransfer.setData('text/plain', JSON.stringify({
                    type: 'reorder',
                    index: index
                }));
            });

            el.addEventListener('dragend', () => {
                el.classList.remove('dragging');
            });

            canvas.appendChild(el);
        });
    },

    // セクション削除
    deleteSection(index) {
        this.canvasSections.splice(index, 1);
        this.renderCanvas();
    },

    // リセット
    reset() {
        this.canvasSections = [];
        this.renderCanvas();
    }
};

// 起動
app.init();
