import { connectMongoDB } from '@/lib/connect'
import { Contact } from '@/models/contact'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const { newName: name, newEmail: email, newAge: age } = await request.json()
    await connectMongoDB()
    await Contact.findByIdAndUpdate(id, { name, email, age })
    return NextResponse.json({ message: 'Contact updated' }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}

export async function GET({ params }: { params: { id: string } }) {
  const { id } = params
  try {
    await connectMongoDB()
    const contact = await Contact.findOne({ _id: id })
    return NextResponse.json({ contact }, { status: 200 })
  } catch (error) {
    console.log(error)
  }
}
