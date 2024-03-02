### Scenario eligibility for Bildungsurlaub
```mermaid
stateDiagram-v2
    state1: Employed
    state2: In the company for more than 6 months
    state3: Eligible for Bildungsurlaub
    state4: Can use up to 10 days every two years
    state1 -->  state2
    state2 --> state3
    state3 --> state4
```

### Scenario eligibilitz for Bildungsurlaub, flowchart version
```mermaid
flowchart TD
    A("Employed") --> B("In the company for more than 6 months")
    B --> C("Eligible for Bildungsurlaub")
    C --> D("Can use up to 10 days every two years")
```
<!-- mmdc -i app/components/schema/mermaid.md -o mermaid.md -->
<!-- https://github.com/mermaid-js/mermaid-cli -->
