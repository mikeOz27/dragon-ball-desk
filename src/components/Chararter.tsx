import { useState, useEffect } from 'react';
import ChararterCard from './ChararterCard';
import { Container, Row, Col  } from  'reactstrap'

import { Pagination } from '@mui/material';

export const Chararter = () => {
    const [listChararter, setListChararter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

    const API_URL = import.meta.env.VITE_API_URL;

    const getChararter = async (page: number) => {
        try {
            const res = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
            const data = await res.json();
            setListChararter(data.items);
            setTotal(data.meta.totalItems);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    useEffect(() => {
        getChararter(page);
    }, [page]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <>
            <Container>
                {loading && <p>Loading...</p>}
                <Row className="mt-3">
                    {listChararter.map((chararter: any) => (
                        <Col key={chararter.id}>
                            <ChararterCard chararter={chararter} />
                        </Col>
                    ))}
                </Row>
                <Pagination
                    count={Math.ceil(total / limit)}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    className="mt-3"
                />
            </Container>
        </>
    );
};
