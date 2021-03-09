```mermaid
erDiagram

    CAR ||--o{ NAMED-DRIVER : allows
    PERSON ||--o{ NAMED-DRIVER : is

    CAR {
        string registrationNumber
        string make
        string model
    }
```
