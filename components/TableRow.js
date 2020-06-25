export default ({ creditCard, firstName, loading, lastName, telephone }) => (
  <div className="table table-row">
    <p className={loading ? 'loading' : ''}>
      {firstName} {lastName}
    </p>{' '}
    <p className={`telephone ${loading ? 'loading' : ''}`}>{telephone}</p>
    <p className={`credit-card credit-card-number ${loading ? 'loading' : ''}`}>
      {creditCard && <img width="100" height="64" src="https://www.iconninja.com/files/801/537/209/payment-visa-method-card-icon.png" />}
      {creditCard}
    </p>
  </div>
)
