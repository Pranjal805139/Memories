import { Link , useSearchParams} from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled} from "@mui/material";
import { Categories as CategoriesData } from "../../constants/data.js";
// import styled from '@emotion/styled'

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    marfin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Categories = () => {

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return(

        <>
            <StyledLink to={`/create?category=${category || '' }`}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </StyledLink>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to='/'>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        CategoriesData.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                         {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;