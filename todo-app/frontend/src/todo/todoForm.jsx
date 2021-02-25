import React from "react"
import Grid from "../template/grid"
import { IconButton } from "../template/iconButton";

export default ({ handleAdd, description, handleChange }) => (
    <div role="form" className="todoForm">
        <Grid columns="12 9 10">
            <input 
                type="text" 
                id="description" 
                className="form-control"
                placeholder="Adicione uma tarefa"
                value={description}
                onChange={handleChange}
            />
        </Grid>
        <Grid columns="12 3 2">
            <IconButton style="primary" icon="plus" onClick={handleAdd}></IconButton>
        </Grid>
    </div>
)