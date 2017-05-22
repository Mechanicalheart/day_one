let products = fetch(api/products);

let productList = products.map(function(element){
	return 
	<div class="one_product">
		<img src="{element.image}" alt="" class="one_product_image mb10">
		<h3 class="one_product_title mb10">{element.title}</h3>
		<p class="one_product_description mb10">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quia deleniti sint enim velit alias pariatur. Consequatur inventore a pariatur sed fuga assumenda, excepturi iure ipsum, tempore mollitia. Veritatis, fugit?
		</p>
		<p class="one_product_likes mb10">12 likes</p>
	</div>
});
