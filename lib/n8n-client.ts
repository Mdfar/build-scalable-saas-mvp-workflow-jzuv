import axios from 'axios';

const N8N_API_URL = process.env.N8N_WEBHOOK_URL; const N8N_API_KEY = process.env.N8N_API_KEY;

export const triggerWorkflow = async (workflowId: string, payload: any) => { try { const response = await axios.post(${N8N_API_URL}/${workflowId}, payload, { headers: { 'X-N8N-API-KEY': N8N_API_KEY } }); return response.data; } catch (error) { console.error('Workflow Trigger Error:', error); throw error; } };