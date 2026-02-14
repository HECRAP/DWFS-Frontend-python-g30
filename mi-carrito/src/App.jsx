import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:5000/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
      setError(null);
    } catch (err) {
      setError("❌ No se pudo conectar con el servidor. ¿Está encendido el JSON Server?");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchProducts();
      } catch (err) {
        alert("Error al intentar eliminar el producto.");
      }
    }
  };

  if (loading) return <div className="container"><h2>⌛ Cargando inventario...</h2></div>;
  if (error) return <div className="container"><h2 style={{color: 'red'}}>{error}</h2><button onClick={fetchProducts} className="btn btn-edit">Reintentar</button></div>;

  return (
    <div className="container">
      <h1>ECOSPET🐾</h1>
      <Link to="/create" className="btn btn-add">➕ Agregar Producto</Link>
      <div className="grid">
        {products.length === 0 ? <p>No hay productos registrados.</p> : products.map(p => (
          
          <div key={p.id} className="card">
            <img 
                src={p.image || 'https://via.placeholder.com/150?text=Sin+Foto'} 
                alt={p.name} 
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} 
      />
      
                <h3>{p.name}</h3>
                <p><strong>Precio:</strong> ${p.price}</p>
                <p><strong>Categoría:</strong> {p.category}</p>
      
                <div className="actions">
                <Link to={`/edit/${p.id}`} className="btn btn-edit">✏️ Editar</Link>
                <button onClick={() => handleDelete(p.id)} className="btn btn-delete">🗑️ Borrar</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '', category: 'Perros', image: '' });
  const [isSaving, setIsSaving] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/${id}`)
        .then(res => setProduct(res.data))
        .catch(() => alert("Error al cargar el producto para editar."));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      if (id) {
        await axios.put(`${API_URL}/${id}`, product);
      } else {
        await axios.post(API_URL, { ...product, id: Date.now().toString() });
      }
      navigate('/');
    } catch (err) {
      alert("⚠️ Error al guardar los cambios. Inténtalo de nuevo.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container">
      <h2>{id ? '✏️ Editar Producto' : '➕ Nuevo Producto'}</h2>
      <form onSubmit={handleSubmit} className="card">
        <label>Nombre del producto:</label>
        <input 
          type="text" 
          value={product.name} 
          onChange={e => setProduct({...product, name: e.target.value})} 
          required 
          disabled={isSaving}
        />
        <label>Precio:</label>
        <input 
          type="number" 
          value={product.price} 
          onChange={e => setProduct({...product, price: e.target.value})} 
          required 
          disabled={isSaving}
        />
        <label>URL de la imagen:</label>
        <input 
          type="text" 
          placeholder="Pega el link de la foto aquí (https://...)"
          value={product.image} 
          onChange={e => setProduct({...product, image: e.target.value})} 
/>
        <label>Categoría:</label>
        <select value={product.category} onChange={e => setProduct({...product, category: e.target.value})} disabled={isSaving}>
          <option value="Perros">Perros</option>
          <option value="Gatos">Gatos</option>
          <option value="Aves">Aves</option>
        </select>
        <div style={{marginTop: '20px'}}>
          <button type="submit" className="btn btn-add" disabled={isSaving}>
            {isSaving ? 'Guardando...' : 'Guardar'}
          </button>
          <Link to="/" style={{marginLeft: '10px'}}>Cancelar</Link>
        </div>
      </form>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}