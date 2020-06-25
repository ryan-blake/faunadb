export default ({ creditCard, firstName, loading, lastName, telephone,id }) => (
  <div id={`${id}`} className="table table-row">
    <p className={loading ? 'loading' : ''}>
      {firstName} {lastName}
    </p>{' '}
    <p className={`telephone ${loading ? 'loading' : ''}`}>{telephone}</p>
    <p className={`credit-card credit-card-number ${loading ? 'loading' : ''}`}>
      {creditCard && <img width="40" height="40" src="https://www.iconninja.com/files/801/537/209/payment-visa-method-card-icon.png" />}
      {creditCard}
    </p>
  </div>
)
