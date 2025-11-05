# Atividade 02 - Teste de Mesa – Estruturas Lógicas

Data: 23/09/2025
Nome: Daniel Reis Gonçalves Sant'ana

## Exercício 1

```
Início
 x ← 5
 Se x > 3 então y ← 10 Senão y ← 0 FimSe
Fim
```

| Passo | x   | y   | Condição | Ação/Comentário           |
| ----- | --- | --- | -------- | ------------------------- |
| 1     | –   | –   | –        | início                    |
| 2     | 5   | –   | x > 3?   | avalia 5 > 3 → verdadeiro |
| 3     | 5   | –   | –        | y ← 10                    |
| 4     | 5   | 10  | –        | fecha Se                  |
| 5     | 5   | 10  | –        | fim do algoritmo          |

---

## Exercício 2

```
Início
 a ← 8
 b ← 2
 Se a < b então c ← a + b Senão c ← a − b FimSe
Fim
```

| Passo | a   | b   | c   | Condição | Ação/Comentário       |
| ----- | --- | --- | --- | -------- | --------------------- |
| 1     | –   | –   | –   | –        | início                |
| 2     | 8   | –   | –   | –        | a ← 8                 |
| 3     | 8   | 2   | –   | a < b?   | avalia 8 < 2 → falso  |
| 4     | 8   | 2   | –   | –        | c ← a − b → 8 − 2 = 6 |
| 5     | 8   | 2   | 6   | –        | fim do algoritmo      |

---

## Exercício 3

```
Início
 n ← 7
 Se n % 2 = 0 então r ← "par" Senão r ← "ímpar" FimSe
Fim
```

| Passo | n   | r       | Condição   | Ação/Comentário      |
| ----- | --- | ------- | ---------- | -------------------- |
| 1     | –   | –       | –          | início               |
| 2     | 7   | –       | –          | n ← 7                |
| 3     | 7   | –       | 7 % 2 = 0? | avalia 1 = 0 → falso |
| 4     | 7   | –       | –          | r ← "ímpar"          |
| 5     | 7   | "ímpar" | –          | fim do algoritmo     |

---

## Exercício 4

```
Início
 idade ← 20
 Se idade ≥ 18 então status ← "maior" Senão status ← "menor" FimSe
Fim
```

| Passo | idade | status  | Condição    | Ação/Comentário             |
| ----- | ----- | ------- | ----------- | --------------------------- |
| 1     | –     | –       | –           | início                      |
| 2     | 20    | –       | –           | idade ← 20                  |
| 3     | 20    | –       | idade ≥ 18? | avalia 20 ≥ 18 → verdadeiro |
| 4     | 20    | –       | –           | status ← "maior"            |
| 5     | 20    | "maior" | –           | fim do algoritmo            |

---

## Exercício 5

```
Início
 nota ← 75
 Se nota ≥ 60 então resultado ← "aprovado" Senão resultado ← "reprovado" FimSe
Fim
```

| Passo | nota | resultado  | Condição   | Ação/Comentário             |
| ----- | ---- | ---------- | ---------- | --------------------------- |
| 1     | –    | –          | –          | início                      |
| 2     | 75   | –          | –          | nota ← 75                   |
| 3     | 75   | –          | nota ≥ 60? | avalia 75 ≥ 60 → verdadeiro |
| 4     | 75   | –          | –          | resultado ← "aprovado"      |
| 5     | 75   | "aprovado" | –          | fim do algoritmo            |

---

## Exercício 6

```
Início
 x ← 4
 y ← 9
 Se (x < y) E (y > 5) então z ← 1 Senão z ← 0 FimSe
Fim
```

| Passo | x   | y   | z   | Condição         | Ação/Comentário           |
| ----- | --- | --- | --- | ---------------- | ------------------------- |
| 1     | –   | –   | –   | –                | início                    |
| 2     | 4   | –   | –   | –                | x ← 4                     |
| 3     | 4   | 9   | –   | (4 < 9)∧(9 > 5)? | avalia V ∧ V → verdadeiro |
| 4     | 4   | 9   | –   | –                | z ← 1                     |
| 5     | 4   | 9   | 1   | –                | fim do algoritmo          |

---

## Exercício 7

```
Início
 a ← 10
 b ← 20
 Se (a > 5) OU (b < 15) então c ← 100 Senão c ← 200 FimSe
Fim
```

| Passo | a   | b   | c   | Condição            | Ação/Comentário           |
| ----- | --- | --- | --- | ------------------- | ------------------------- |
| 1     | –   | –   | –   | –                   | início                    |
| 2     | 10  | –   | –   | –                   | a ← 10                    |
| 3     | 10  | 20  | –   | (10 > 5)∨(20 < 15)? | avalia V ∨ F → verdadeiro |
| 4     | 10  | 20  | –   | –                   | c ← 100                   |
| 5     | 10  | 20  | 100 | –                   | fim do algoritmo          |

---

## Exercício 8

```
Início
 p ← 0
 Se NÃO (p = 0) então q ← 1 Senão q ← -1 FimSe
Fim
```

| Passo | p   | q   | Condição  | Ação/Comentário   |
| ----- | --- | --- | --------- | ----------------- |
| 1     | –   | –   | –         | início            |
| 2     | 0   | –   | –         | p ← 0             |
| 3     | 0   | –   | ¬(0 = 0)? | avalia ¬V → falso |
| 4     | 0   | –   | –         | q ← -1            |
| 5     | 0   | -1  | –         | fim do algoritmo  |

---

## Exercício 9

```
Início
 m ← 3
 n ← 7
 Se (m + n) > 10 então r ← m \* n Senão r ← m − n FimSe
Fim
```

| Passo | m   | n   | r   | Condição  | Ação/Comentário      |
| ----- | --- | --- | --- | --------- | -------------------- |
| 1     | –   | –   | –   | –         | início               |
| 2     | 3   | –   | –   | –         | m ← 3                |
| 3     | 3   | 7   | –   | (3+7)>10? | avalia 10>10 → falso |
| 4     | 3   | 7   | –   | –         | r ← m − n → 3−7 = -4 |
| 5     | 3   | 7   | -4  | –         | fim do algoritmo     |

---

## Exercício 10

```
Início
 idade ← 16
 Se (idade ≥ 18) então voto ← "obrigatório"
 Senão Se idade ≥ 16 então voto ← "facultativo" Senão voto ← "não vota" FimSe FimSe
Fim
```

| Passo | idade | voto          | Condição    | Ação/Comentário                                     |
| ----- | ----- | ------------- | ----------- | --------------------------------------------------- |
| 1     | –     | –             | –           | início                                              |
| 2     | 16    | –             | –           | idade ← 16                                          |
| 3     | 16    | –             | idade ≥ 18? | avalia falso                                        |
| 4     | 16    | –             | idade ≥ 16? | avalia verdadeiro                                   |
| 5     | 16    | "facultativo" | –           | voto ← "facultativo"; fim dos blocos Se e algoritmo |
