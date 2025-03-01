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

export const calculateMemberSince = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMilliseconds = now - createdDate;

  // Convert the difference to seconds, minutes, hours, days, and years
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  // Determine the appropriate time unit to return
  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
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
