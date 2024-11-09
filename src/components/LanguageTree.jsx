import React, {useState, useEffect} from 'react';
import {LANGUAGE_NAMES} from '../functions/udhr.js';
import {ChevronRight, X} from 'lucide-react';

export const LanguageTree = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [availableLanguages, setAvailableLanguages] = useState(Object.keys(LANGUAGE_NAMES));

    const handleInputChange = (e) => setSearchTerm(e.target.value);

    const filteredLanguages = availableLanguages.filter((languageCode) =>
        LANGUAGE_NAMES[languageCode].toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleLanguage = (languageCode) => {
        if (selectedLanguages.includes(languageCode)) {
            setSelectedLanguages(selectedLanguages.filter((code) => code !== languageCode));
        } else {
            setSelectedLanguages([...selectedLanguages, languageCode]);
        }
    };


    const onPerformSearch = () => {
    }

    return (
        <div style={{padding: '20px', width: '100%'}}>
            <div style={{display: 'flex', gap: '24px', width: '60vw'}}>
                {/* Left Panel - Available Languages */}
                <div style={{
                    width: '50%',
                    height: '500px',
                    overflowY: 'auto',
                    border: '1px solid #ccc',
                    padding: '24px',
                    boxSizing: 'border-box',
                    borderRadius: '12px',
                    backgroundColor: 'white'
                }}>
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#1a365d'
                    }}>Available Languages</h3>
                    <div style={{position: 'relative', marginBottom: '20px'}}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="Search languages..."
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 25px',
                                border: '2px solid #e2e8f0',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#3182ce'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        maxHeight: '500px',
                        overflowY: 'auto',
                        padding: '4px'
                    }}>
                        {filteredLanguages.map((languageCode) => (
                            <div
                                key={languageCode}
                                onClick={() => toggleLanguage(languageCode)}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '16px',
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <div style={{color: '#2d3748'}}>{LANGUAGE_NAMES[languageCode]}</div>
                                <ChevronRight size={20} color="#a0aec0"/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel - Selected Languages */}
                <div style={{
                    width: '50%',
                    height: '500px',
                    overflowY: 'auto',
                    border: '1px solid #ccc',
                    padding: '24px',
                    boxSizing: 'border-box',
                    borderRadius: '12px',
                    backgroundColor: 'white'
                }}>
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#1a365d'
                    }}>Selected Languages</h3>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        maxHeight: '500px',
                        overflowY: 'auto',
                        padding: '4px'
                    }}>
                        {selectedLanguages.map((languageCode) => (
                            <div
                                key={languageCode}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '16px',
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px'
                                }}
                            >
                                <div style={{color: '#718096', fontSize: '0.9rem'}}>{LANGUAGE_NAMES[languageCode]}</div>
                                <X size={20} color="#a0aec0" style={{cursor: 'pointer'}} onClick={() =>
                                    toggleLanguage(languageCode)
                                }/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end', // Aligns the button to the right
                marginBottom: '24px',
                marginTop: '24px',
            }}>
                <button
                    onClick={onPerformSearch}
                    style={{
                        padding: '12px 24px',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: 'none',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.2s'
                    }}
                >
                    Search
                </button>
            </div>
        </div>
    );
};