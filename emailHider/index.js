const hideEmail = (email, option) => {
  const [username, domain] = email.split("@");
  const hiddenUsername =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];
  if (option === "hideFull") {
    const [domainName, ...domains] = domain.split(".");
    const hiddenDomainName =
      domainName[0] +
      "*".repeat(domainName.length - 2) +
      domainName[domainName.length - 1];
    const lastPart =
      hiddenDomainName + domains.reduce((acc, v) => acc + "." + v, "");
    return hiddenUsername + "@" + lastPart;
  } else {
    return hiddenUsername + "@" + domain;
  }
};

console.log(hideEmail("example@example.com"));
console.log(hideEmail("example+test@example.co.uk", "hideFull"));
