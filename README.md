# Shoppy - 쇼핑몰 구현 프로젝트

백엔드로 파이어베이스를 사용해서 쇼핑몰사이트 구현 

https://lucky-taffy-e6cc84.netlify.app/

### 페이지 및 기능

<App/>
/<Home>
/products -> <AllProducts>
/products/new -> <NewProduct>
/products/:id -> <ProductDetail>
/carts -> <MyCart>

**Home**

- navbar
    - logo
    - product(전체 프로덕트만을 볼수있음)
    - edit(admin일경우에만 노출. 상품 추가, 수정, 삭제)
    - 로그인 계정(프로필 아바타와 함께 보여짐)
    - 로그인/로그아웃 버튼
- banner, products
![KakaoTalk_20240124_141502581](https://github.com/hyeonkyeong31/Shoppy/assets/78129949/bebe8d75-43a8-434c-b161-90e81ecc16df)


**Cart**
![KakaoTalk_20240124_141520257](https://github.com/hyeonkyeong31/Shoppy/assets/78129949/9033b662-283d-46b1-b507-2cf285189888)


**NewProduct**
![KakaoTalk_20240124_141539171](https://github.com/hyeonkyeong31/Shoppy/assets/78129949/9224915e-a264-462a-b1c4-3875440ac546)



### 기술스택

Language : typescript

Server 상태 관리 : react-query

Css Framwork : tailwindCSS

Deploy : netlify
