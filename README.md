# Shoppy - 쇼핑몰 구현 프로젝트

`firebase`를 사용하여 백엔드를 구축하였고, 클라우드 기반의 이미지 및 비디오 관리 서비스인 `Cloudinary`를 사용하여 product이미지를 관리

- 새로고침해도 로그인이 풀리지 않게 useEffect로  firebase에서 제공해주는 onUserStateChange를 사용하여, 로그인한 사용자의 세션이 남아있거나 또는 사용자가 로그인을 했다면, 유효한 유저의 정보가 전달이 될것이고 그 정보로 컴포넌트의 상태를 업데이트 (setUser)  해주었음.
- useQuery 를 사용할때 get을 읽어오는부분과 업데이트 하는 부분이 여기저기 산재해있다 보니 찾아보기 어려워져서  custom Hook으로 따로 관리. 한곳에서 동일한 캐시키로 읽어오는것과 업데이트하는것이 함께 있으니까 staleTime이 얼마까지 있는지, 그리고 invalidate를 해야하는지 등을 관리하기 용이해짐.

- `React`
- `react-query`로 상태관리
- `netlify`로 배포
- 제품 / 상세 / 카트 / 어드민 - 제품등록 페이지 구현
- `tailwind-css` 를 사용하여 ui제작하였고, 모바일도 별도로 스타일링


https://lucky-taffy-e6cc84.netlify.app/

### 페이지 및 기능

<img width="179" alt="다운로드" src="https://github.com/hyeonkyeong31/Shoppy/assets/78129949/f0c838e8-d67f-4db6-9abb-cc0c52208b8e">

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


