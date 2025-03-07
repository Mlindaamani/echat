export const formatDate = (isoDate, options = {}) => {
  const date = new Date(isoDate);
  const defaultOptions = {
    minute: "2-digit",
    hour: "2-digit",
    day: "2-digit",
    month: "short",
    hour24: true,
  };
  const finalOptions = { ...defaultOptions, ...options };

  return date.toLocaleString("en-US", finalOptions);
};

export const calculateMemberSince = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMilliseconds = now - createdDate;

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

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

export const roleBadgeColor = (role) => {
  switch (role) {
    case "admin":
      return "bg-danger";
    case "moderator":
      return "bg-warning text-dark";
    case "guest":
      return "bg-secondary";
    default:
      return "bg-primary";
  }
};

export const getBackendErrorMessage = (error) => error.response?.data?.message;

//#2D4263
//#2F2F2F
//#6A0572--magenta
//0047AB
//2D4263....dark blue
//1E3A2F....dark green
//3A2462
