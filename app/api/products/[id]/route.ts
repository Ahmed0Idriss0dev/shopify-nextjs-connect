import { NextRequest } from "next/server";
import { GetById } from "@/lib/GetById";

export async function POST(req:NextRequest , { params }: { params: { id: string }} ){
    const {id} =params
    const product = await GetById({id})
    return Response.json({product})
}