const DATE_FORMATTER = new Intl.DateTimeFormat("en-AU", {
  dateStyle: "long",
});

export function formatDate(date: string) {
  return DATE_FORMATTER.format(new Date(date)).toString().slice(2);
}
