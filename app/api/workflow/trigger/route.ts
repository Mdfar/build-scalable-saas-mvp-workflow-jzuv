import { NextResponse } from 'next/server'; import { triggerWorkflow } from '@/lib/n8n-client'; import { getServerSession } from 'next-auth';

export async function POST(req: Request) { const session = await getServerSession(); if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

const body = await req.json(); const { workflowId, data } = body;

try { const result = await triggerWorkflow(workflowId, { userId: session.user.email, ...data }); return NextResponse.json({ success: true, result }); } catch (error) { return NextResponse.json({ success: false, message: 'Failed to trigger automation' }, { status: 500 }); } }