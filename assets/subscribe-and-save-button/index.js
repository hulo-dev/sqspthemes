!function(e){let t;fetch(document.location.origin+e+"?format=json-pretty").then(e=>e.json()).then(e=>{t=e.collection.id,function e(){let i=document.querySelector(`.collection-${t}.view-item`);if(i){i.classList.add("subscribtion-item");let r=i.querySelector(".ProductItem"),s=r.querySelector(".ProductItem-product-price"),n=r.querySelector(".subscription-option");if(n){let o=s.cloneNode(!0);o.classList.add("changing-price","invisible");let c=r.querySelector(".ProductItem-details-checkout");c.insertBefore(o,s);let l=r.querySelector(".pdp-subscriptions-and-otp"),a=JSON.parse(l.getAttribute("data-variants"))[0].pricingOptions,u=function e(t){let i=[];return t.forEach((e,t)=>{let r=e.productSubscriptionOptionId,s=e.subscriptionPlan.billingPeriod.unit,n=e.percentageDiscount,o=`<div class="inputs-radio-wrap">
  <input type="radio" id=${r} value=${n} name="otp-subs-radio" class="subscription-value-group" data-id=${t} data-percentage=${100*n}% subscription-price=${e.priceMoney.value}>
  <label for=${r}>Deliver ${s}, save ${100*n}%</label>
</div>
`;i.push(o)}),i}(a);(function e(t){let i=r.querySelector(".subscription-option"),s=document.createElement("div");s.innerHTML=t,i.appendChild(s),function e(){let t=r.querySelectorAll(".subscription-value-group");t.forEach((e,t)=>{e.addEventListener("change",()=>{let i=r.querySelector(".subscription-frequency");i.selectedIndex=t;let s=e.getAttribute("id");r.querySelector(".subscription-option").setAttribute("data-selected-id",s)})})}()})(`
			<div class="radio-buttons-ontainer">
  					${u.join("")}
  				</div>
		`);let d=r.querySelectorAll("input"),p=r.querySelector(".product-quantity-input"),b=r.querySelector(".sqs-add-to-cart-button-inner"),y=r.querySelector(".sqs-add-to-cart-button"),v=r.querySelector(".changing-price");v.querySelector(".product-price");let g=r.querySelector(".ProductItem-product-price:not(.changing-price)");function q(e,t){let i=document.querySelector(".message-block");e?(i.innerHTML=`<p class="message-text">Subscribtion save ${100*t}%</p>`,i.style.display="inline-block"):i.style.display="none"}d.forEach((e,t)=>{e.addEventListener("change",()=>{let t=r.querySelector(".message-block");if(t?t.style.display="none":function e(){let t=document.createElement("span");t.classList.add("message-block"),g.appendChild(t),t.style.display="none"}(),e.checked&&e.classList.contains("subscription-value-group")){p.classList.add("invisible"),y.setAttribute("data-is-subscription",!0),b.innerHTML="Subscribe",y.setAttribute("data-subscription-option-id",e.getAttribute("id"));let i=e.getAttribute("subscription-price");v.querySelector(".product-price").innerHTML=i,g.classList.add("text-decoration"),v.classList.remove("invisible"),q(!0,e.value)}else p.classList.remove("invisible"),v.classList.add("invisible"),g.classList.remove("text-decoration"),q(!1,e.value)})})}}}()})}(values.path);