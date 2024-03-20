import { connectMongoDB } from '@/lib/connect'
import { Contact } from '@/models/contact'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const { name, email, age }: any = await req.json()
  try {
    await connectMongoDB()
    await Contact.create({
      name,
      email,
      age
    })
    return NextResponse.json({ message: 'Contact created' }, { status: 201 })
  } catch (error) {
    console.log(error)
  }
}

export const GET = async () => {
  await connectMongoDB()
  const getContact = await Contact.find()
  return NextResponse.json(getContact)
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMongoDB()
  await Contact.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Contact deleted' }, { status: 200 })
}
