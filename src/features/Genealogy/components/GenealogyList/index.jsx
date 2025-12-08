import { useSelector, useDispatch } from "react-redux";
import GenealogyItem from "../GenealogyItem";
import { useEffect } from "react";
import { getAllGenealogy } from "@/features/Genealogy/genealogySlice";
import { unwrapResult } from "@reduxjs/toolkit";

function GenealogyList({ handleEdit, handleDelete }) {
    const dispatch = useDispatch();
    const genealogyList = useSelector((state) => state.genealogy.items);

    useEffect(() => {
        const getData = async () => {
            try {
                const action = getAllGenealogy();
                const resultAction = await dispatch(action);

                const data = unwrapResult(resultAction);
                console.log("Genealogy data: ", data);
            } catch (error) {
                console.error("Fetch genealogy failed: ", error);
            }
        };

        getData();
    }, [dispatch]);

    return (
        <div className='genealogy-list'>
            {genealogyList?.map((item) => (
                <GenealogyItem key={item.id} item={item} onEdit={() => handleEdit(item)} onDelete={() => handleDelete(item)}/>
            ))}
        </div>
    );
}

export default GenealogyList;
