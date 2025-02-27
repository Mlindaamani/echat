export const formatDate = (isoDate, options = {}) => {
  const date = new Date(isoDate);

  const defaultOptions = {
    minute: "2-digit",
    hour: "2-digit",
    day: "2-digit",
    month: "short",
    hour24: true,
  };
  // Merge default options with user-provided options
  const finalOptions = { ...defaultOptions, ...options };

  return date.toLocaleString("en-US", finalOptions);
};

export const getBackendErrorMessage = (error) => error.response?.data?.message;

export const getEmoji = () => {
  const emojies = [
    "😀",
    "😂",
    "😍",
    "😎",
    "😢",
    "😡",
    "🥳",
    "😱",
    "😴",
    "😇",
    "🤔",
    "😜",
    "😋",
    "😏",
    "😬",
    "😳",
    "😵",
    "🤯",
    "🥺",
    "😺",
    "🐶",
    "🐱",
    "🐻",
    "🐼",
    "🐨",
    "🦁",
    "🐯",
    "🦊",
    "🐸",
    "🐵",
    "🐔",
    "🐧",
    "🐦",
    "🐤",
    "🐣",
    "🐘",
    "🦒",
    "🐬",
    "🐳",
    "🐋",
    "🦈",
    "🐊",
    "🦙",
    "🐴",
    "🦄",
    "🌈",
    "🌻",
    "🌼",
    "🎛️",
    "🌺",
    "🍎",
    "🍕",
    "🍔",
    "🍣",
    "🍦",
    "🎉",
    "🎈",
    "🎊",
    "🤖",
    "🎵",
  ];
  return emojies[Math.floor(Math.random() * emojies.length)];
};
