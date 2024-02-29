import {supabase} from '../../services/supabaseClient'

export default async (req,res)=>{
    try {
        const { data, error } = await supabase
            .from('feed')
            .select('*')
            .order('id', { ascending: false });

        if (error) {
            throw error;
        }

        return res.status(200).json({ data: data });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    }