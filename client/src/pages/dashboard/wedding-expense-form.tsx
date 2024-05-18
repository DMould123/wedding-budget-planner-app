export const WeddingExpenseForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-field">
          <label>Description:</label>
          <input type="text" required className="input" />
        </div>
        <div className="form-field">
          <label>Amount:</label>
          <input type="number" required className="input" />
        </div>
        <div className="form-field">
          <label>Category:</label>
          <select required className="input">
            <option value="">Select a Category</option>
            <option value="Venue">Venue</option>
            <option value="Catering">Catering</option>
            <option value="Photography">Photography</option>
            <option value="Music">Music</option>
            <option value="Flowers">Flowers</option>
            <option value="Decorations">Decorations</option>
            <option value="Dress">Dress</option>
            <option value="Invitations">Invitations</option>
            <option value="Transportation">Transportation</option>
            <option value="Gifts">Gifts</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label>Payment Method:</label>
          <select required className="input">
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button">
          Add Expense
        </button>
      </form>
    </div>
  )
}
