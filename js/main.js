fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	console.log(data)
	displayData(data)
})

function displayData(info){
	/*console.log(info.mobiles[info.mobiles.length-1])*/
	/*var element=document.getElementsByClassName("div");
	console.log(element[1].innerHTML)*/
	/*var element = document.querySelectorAll(".div")
	console.log(element[1])*/
	/*var nodeData=document.querySelectorAll("div")
	console.log(nodeData[1])*/
	/*var bodyElement=document.querySelector("body");
	var newElement=document.createElement("p")
	newElement.textContent="Karthik & CO"
	console.log(newElement)
	bodyElement.append(newElement)*/
	/*var sampleElement=document.createElement("img")
	sampleElement.src="img/1.png"*/
	/*sampleElement.setAttribute("class","image1 image2 image3")*/
	/*sampleElement.classList.add("class1","class2","class3")
	sampleElement.classList.remove("class2")*/
	var bodyElement=document.querySelector("body");
	/*bodyElement.append(sampleElement)*/
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center");
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-md-6","col-lg-3");
		row.append(column)
		//card
		var card=document.createElement("div");
		card.classList.add("card","mt-3")
		//card body
		var cardBody=document.createElement("div");
		cardBody.classList.add("cardBody")
		//image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive")
		imageElement.alt=value.name;

		//name
		var name=document.createElement("h2");
		name.textContent=value.name;
		name.classList.add("text-center","text-primary")

		//original price
		var originalprice=document.createElement("p");
		originalprice.classList.add("org","text-danger","text-center")
		//originalprice.textContent="₹"+value.originalprice+"/-"
		originalprice.innerHTML="<s>₹"+value.originalprice+"/-</s>"


		//price
		var price=document.createElement("h4");
		price.classList.add("text-primary","text-center")
		price.textContent="₹"+value.price+"/-"

		//add to cart
		var buttonParent=document.createElement("div");
		buttonParent.classList.add("d-grid","gap-2")

		var cart=document.createElement("button");
		cart.classList.add("btn","btn-success")
		cart.textContent="Add to cart"
		buttonParent.append(cart)

		cardBody.append(imageElement)
		cardBody.append(name)
		cardBody.append(originalprice)
		cardBody.append(price)
		cardBody.append(buttonParent)
		card.append(cardBody);
		column.append(card);
	})
}
