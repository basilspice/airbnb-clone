import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser"
import prisma from '@/app/libs/prismadb'

interface IParams {
    reservationId?: string;

};

export async function DELETE(
    request: Request,
    {params}: {params: IParams}
 ) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const {reservationId} = params;

    if (!reservationId || typeof reservationId !== 'string') {
        throw new Error('Invalid ID');
    }
//This allows the creator of the reservation OR the creator of the original listing that the reservation is on to cancel the reservation
    const reservation = await prisma.reservation.deleteMany({
        where: {
            id: reservationId,
            OR: [
                {userId: currentUser.id},
                {listing : {userId: currentUser.id}}
            ]
        }
    })
    return NextResponse.json(reservation)
 }
