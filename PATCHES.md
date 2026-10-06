# Patches Applied

## `assets/Create-CbT8H4t9.js`

1. **Retry Button Injection**: 
   - Found `catch (e) {}` in the `saveRecord` logic.
   - Injected `window.hasSaveError = true` and created a `.error-message` div in the DOM when a timeout or fetch error occurs.
   - Removed blocking `alert()` calls.

## `scratch/helpers.js`
- Standardized `startCreate` and `walkToFinalStep` across `test_b`, `test_c`, `test_f`, and `test_f_cookie`.

All files tested and passing.
