function Card({imageUrl, productName, productPrice}) {
    return (
        <div className="product">
            <img src="{imageUrl}" alt="상품1" />
            <h2>{productName}</h2>
            <p>가격: {productPrice}</p>
            <button>장바구니에 담기</button>
        </div>
    )
}


function App() {
    return (
        <>
            <h1>인기 상품</h1>
            <Card/>
            <Card/>
            <Card/>
        </>
    );
}

export default App; 