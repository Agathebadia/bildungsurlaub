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
