export const total = (items: any) => {
    return items.reduce(function (sum, item) {
      var price = item.productId?.price || 0;
      var count = item.count || 0;
      return sum + (price * count);
    }, 0);
  }