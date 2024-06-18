export const currencyFormatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
})
  export const usdFormatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
export const percentFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

export const percentResultFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });