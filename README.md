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

![KakaoTalk_20240124_141502581.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ee15f082-7d3b-4b44-9c43-70de195f50b5/8ec687fe-3280-4f46-9933-de8128d3ffa1/KakaoTalk_20240124_141502581.png)

**Cart**

![KakaoTalk_20240124_141520257.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ee15f082-7d3b-4b44-9c43-70de195f50b5/0c6f00a7-156b-4834-8c6a-38c918068b07/KakaoTalk_20240124_141520257.png)

**NewProduct**

![KakaoTalk_20240124_141539171.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ee15f082-7d3b-4b44-9c43-70de195f50b5/9640bcca-fdb7-417d-a6f9-8cd32fd3e96e/KakaoTalk_20240124_141539171.png)

### 기술스택

Language : typescript

Server 상태 관리 : react-query

Css Framwork : tailwindCSS

Deploy : netlify
