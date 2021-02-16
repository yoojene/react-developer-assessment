const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  const fmtDate = d.toLocaleDateString('en-GB', { timeZone: 'UTC' });
  return fmtDate;
};

export default formatDate;
