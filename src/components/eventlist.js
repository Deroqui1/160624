// src/components/EventList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/events', {
                    headers: { Authorization: localStorage.getItem('token') }
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Eventos</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
