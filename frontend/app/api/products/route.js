// app/api/products/route.js

let products = [
    {
      id: "1",
      name: "Product 1",
      price: 499,
      imageUrl: "https://picsum.photos/200"
    },
    {
      id: "2",
      name: "Product 2",
      price: 799,
      imageUrl: "https://picsum.photos/200"
    }
  ];
  
  
  export async function GET() {
    return Response.json(products);
  }
  
  export async function POST(req) {
    const body = await req.json();
    const newProduct = {
      id: String(Date.now()),
      name: body.name,
      price: body.price,
      imageUrl: body.imageUrl
    };
    products.push(newProduct);
    return Response.json(newProduct);
  }
  
  export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    products = products.filter(p => p.id !== id);
    return Response.json({ message: "Product deleted", id });
  }
  