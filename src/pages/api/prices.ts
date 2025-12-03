export async function get() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    );
    const data = await res.json();

    // You can replace gold/silver with real pricing later
    return {
      body: JSON.stringify({
        btc: `$${data.bitcoin.usd}`,
        eth: `$${data.ethereum.usd}`,
        gold: "$loading",
        silver: "$loading",
      }),
    };
  } catch (e) {
    return {
      body: JSON.stringify({
        btc: "Error",
        eth: "Error",
        gold: "Error",
        silver: "Error",
      }),
    };
  }
}
