chrome.commands.onCommand.addListener((command) => {
  const changeInTabIndex = command === "previous-tab" ? -1 : 1;
  chrome.tabs.query({ currentWindow: true }, changeTabIndex(changeInTabIndex));
});

const changeTabIndex = (delta) => (tabs) => {
  const currentTabIndex = tabs.find((tab) => tab.active).index;

  // Add tab length before using % to always get positive modulus
  const targetTabIndex = (currentTabIndex + delta + tabs.length) % tabs.length;
  const targetTabId = tabs[targetTabIndex].id;

  chrome.tabs.update(targetTabId, { active: true });
};
