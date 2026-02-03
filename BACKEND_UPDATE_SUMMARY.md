# Backend Update Summary - Campo Assunto

## Changes Made

Successfully updated `server/index.js` to extract the "assunto" field from the database.

### Modified SQL Queries

All three query variants in the `/audiencias` endpoint now include:
```sql
SPLIT_PART("processo.pasta", ' - ', 2) as assunto
```

**Query Variants Updated:**
1. ✅ Range de datas (with startDate and endDate parameters)
2. ✅ Data única (with only startDate parameter)
3. ✅ Todas as audiências (no date parameters)

### SQL Logic

The `SPLIT_PART` function extracts the subject from the `processo.pasta` field:
- **Input format:** `"0001234-56.2024.8.26.0100 - Ação de Cobrança"`
- **Extraction:** `SPLIT_PART("processo.pasta", ' - ', 2)`
- **Result:** `"Ação de Cobrança"`

**Edge Cases:**
- If `processo.pasta` doesn't contain " - ", `SPLIT_PART` returns an empty string
- If `processo.pasta` is NULL, the WHERE clause filters it out

## Manual Testing Instructions

### Prerequisites
1. Ensure you have a `.env` file in the project root with:
   ```
   MOSELLO_PG_ADMIN_PASSWORD=your_password_here
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   cd ..
   ```

### Start the Backend Server

```bash
cd server
node index.js
```

Expected output:
```
Servidor da API rodando na porta 3001
```

### Test the API Endpoint

**Option 1: Test with all audiências**
```bash
curl http://localhost:3001/audiencias
```

**Option 2: Test with specific date**
```bash
curl "http://localhost:3001/audiencias?startDate=2024-12-01"
```

**Option 3: Test with date range**
```bash
curl "http://localhost:3001/audiencias?startDate=2024-12-01&endDate=2024-12-31"
```

### Verify the Response

Check that the JSON response includes the `assunto` field for each record:

```json
[
  {
    "id": "...",
    "processo.pasta": "0001234-56.2024.8.26.0100 - Ação de Cobrança",
    "processo_numero": "0001234-56.2024.8.26.0100",
    "assunto": "Ação de Cobrança",
    "data": "03/12/2024",
    "hora": "09:30",
    ...
  }
]
```

### Expected Results

✅ Each record should have:
- `processo_numero`: The process number (before " - ")
- `assunto`: The subject (after " - ")

✅ If a record's `processo.pasta` doesn't contain " - ":
- `processo_numero`: The entire `processo.pasta` value
- `assunto`: Empty string

## Requirements Validated

- ✅ **Requirement 1.1:** Backend extracts assunto using SPLIT_PART
- ✅ **Requirement 1.2:** Returns NULL/empty for records without " - " separator
- ✅ **Requirement 1.3:** API response includes "assunto" field in JSON

## Next Steps

After manual testing confirms the backend is working:
1. Verify the frontend can receive and display the `assunto` field
2. Test both mobile and desktop views
3. Verify edge cases (missing assunto, very long assunto text)

## Files Modified

- `server/index.js` - Added `assunto` field extraction to all three SQL query variants
