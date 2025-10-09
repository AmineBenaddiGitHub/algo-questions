/*
You're building a tool that tracks component edits and groups them into a changelog.
Given an array of edit actions, each with a timestamp and a component name,
return an array of grouped changelog entries.
Edits to the same component within a 10-minute window should be merged into one changelog entry,
showing the component name and the range of timestamps affected.

Example:

const edits = [
  { timestamp: "2025-10-06T08:00:00Z", component: "Header" },
  { timestamp: "2025-10-06T08:05:00Z", component: "Header" },
  { timestamp: "2025-10-06T08:20:00Z", component: "Header" },
  { timestamp: "2025-10-06T08:07:00Z", component: "Footer" },
  { timestamp: "2025-10-06T08:15:00Z", component: "Footer" },
];

> groupChangelogEdits(edits)
> [
    {
        "component": "Footer",
        "start": "2025-10-06T08:07:00Z",
        "end": "2025-10-06T08:15:00Z"
    },
    {
        "component": "Header",
        "start": "2025-10-06T08:00:00Z",
        "end": "2025-10-06T08:05:00Z"
    },
    {
        "component": "Header",
        "start": "2025-10-06T08:20:00Z",
        "end": "2025-10-06T08:20:00Z"
    }
]

 */

function groupChangelogEdits(edits) {
  return edits
    .toSorted((a, b) => {
      if (a !== b) {
        return a < b;
      }
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    })
    .reduce((acc, v) => {
      const lastElt = acc.at(-1);
      if (!lastElt) {
        acc.push({
          component: v.component,
          start: v.timestamp,
          end: v.timestamp,
        });
      } else {
        const currTime = new Date(v.timestamp).getTime();
        const lastEltStart = new Date(lastElt.start).getTime();
        const lastEltEnd = new Date(lastElt.end).getTime();
        if (
          Math.abs(currTime - lastEltStart) <= 600_000 &&
          Math.abs(currTime - lastEltEnd) <= 600_000 &&
          v.component === lastElt.component
        ) {
          lastElt.start = lastEltStart > currTime ? v.timestamp : lastElt.start;
          lastElt.end = lastEltStart < currTime ? v.timestamp : lastElt.end;
        } else {
          acc.push({
            component: v.component,
            start: v.timestamp,
            end: v.timestamp,
          });
        }
      }
      return acc;
    }, [])
    .toSorted(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
}

console.log(
  groupChangelogEdits([
    { timestamp: "2025-10-06T08:00:00Z", component: "Header" },
    { timestamp: "2025-10-06T08:05:00Z", component: "Header" },
    { timestamp: "2025-10-06T08:20:00Z", component: "Header" },
    { timestamp: "2025-10-06T08:07:00Z", component: "Footer" },
    { timestamp: "2025-10-06T08:15:00Z", component: "Footer" },
  ])
);
