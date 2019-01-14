export default function(statusId) {
  switch (statusId) {
    case 1:
      return 'Order received, pending payment confirmation';
    case 2:
      return 'Payment received, pending shipping confirmation';
    case 3:
      return 'Your order have been shipped';
    case 4:
      return 'Your order have been delivered';
    default:
      return 'Order not found';
  }
}
