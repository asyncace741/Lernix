document.addEventListener('DOMContentLoaded', function() {
    const tabNamesList = document.getElementById('tab-names');
    const conversationTab = document.getElementById('conversation-tab');
    const commitsTab = document.getElementById('commits-tab');
    const checksTab = document.getElementById('checks-tab');
    const fileChangedTab = document.getElementById('file-changed-tab');
    const allTabsContent = [conversationTab, commitsTab, checksTab];
    Array.from(tabNamesList.children).forEach(tabButton => {
        tabButton.addEventListener('click', function() {
            Array.from(tabNamesList.children).forEach(btn => {
                btn.classList.remove('active');
            });
            allTabsContent.forEach(contentDiv => {
                if (contentDiv) {
                    contentDiv.style.display = 'none';
                }
            });
            this.classList.add('active');
            const tabIndex = Array.from(tabNamesList.children).indexOf(this);
            if (allTabsContent[tabIndex]) {
                allTabsContent[tabIndex].style.display = 'block';
            }
        });
    });
    if (tabNamesList.children.length > 0) {
        tabNamesList.children[0].classList.add('active');
        if (conversationTab) {
            conversationTab.style.display = 'block';
        }
    }
});