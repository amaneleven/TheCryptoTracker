const form=document.querySelector('#searchForm');
const result=document.querySelector('#table-result');
var upd;


form.addEventListener('submit' ,(e)=>{

    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }
const ctype =form.elements.coinType.value.toLowerCase();

fetchPrice(ctype);

});

const fetchPrice = async(ctype) =>{
    const r= await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
 

    const price=r.data.coin.price;
    const volume=r.data.coin.volume;
    const change=r.data.coin.priceChange1d;
    const base=r.data.coin.name;
    const target='INR';

    
    result.innerHTML=`
    <tr>
    <td>Property</td>
    <td>Value</td>
</tr>
<tr>    
    <td>${base}</td>
    <td>${price}</td>
</tr>
<tr>    
    <td>Volume</td>
    <td>${volume}</td>
</tr>
<tr>    
    <td>24hr Change</td>
    <td>${change}</td>
</tr>
<tr>    
    <td>Currency</td>
    <td>${target}</td>
</tr>
    
    `
    
  upd=setTimeout(()=>fetchPrice(ctype),10000); 





}

