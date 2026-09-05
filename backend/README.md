Projeto Filmes

## Services

### `getWinsByCategory()` (`services/categoryAwards.service.js`)

Retorna premiações com `Nomination.winner = true`, agrupadas por `Category`.
Cada item traz `categoryId`, `categoryName`, `categoryClass`, `winsCount` e `winners`
(com `ceremony`, `films` e `nominees`). Em erro de consulta, lança `Error` com mensagem clara.