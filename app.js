class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = { value, left: null, right: null };
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    delete(value) {
        // Implementarea ștergerii nodurilor pentru exercițiu
    }
}

// Performanță
function measurePerformance(values, operation) {
    const tree = new BinaryTree();
    const start = performance.now();
    values.forEach(value => {
        if (operation === "insert") tree.insert(value);
        else if (operation === "search") tree.search(value);
    });
    const end = performance.now();
    return end - start;
}

// Eveniment Start
document.getElementById('startButton').addEventListener('click', () => {
    const randomValues = document.getElementById('randomInput').value.split(',').map(Number);
    const ascendingValues = document.getElementById('ascendingInput').value.split(',').map(Number);
    const descendingValues = document.getElementById('descendingInput').value.split(',').map(Number);

    const results = [
        { type: "Aleatorii", time: measurePerformance(randomValues, "insert") },
        { type: "Crescătoare", time: measurePerformance(ascendingValues, "insert") },
        { type: "Descrescătoare", time: measurePerformance(descendingValues, "insert") }
    ];

    results.sort((a, b) => a.time - b.time);

    const rankingList = document.getElementById('rankingList');
    rankingList.innerHTML = results.map(result => `<li>${result.type}: ${result.time.toFixed(2)} ms</li>`).join('');
});
