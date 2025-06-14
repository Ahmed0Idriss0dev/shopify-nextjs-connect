import { getAllProducts } from "@/lib/GetAllProducts";

export async function GET() {
    return Response.json({hello:'world'})
}
export async function POST() {
    const Products = await getAllProducts()
    return Response.json({Products})
}
