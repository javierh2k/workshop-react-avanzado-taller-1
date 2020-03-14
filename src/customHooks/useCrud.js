import React, { useState, useEffect } from "react";

export function useCrud(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);

  const BASEURL = "http://localhost:1339";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(BASEURL + url, {
          cache: "default"
        });

        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  async function save(form, id) {
    try {
      const headers = { "Content-Type": "application/json" };
      setSaving(true);
      const body = Array.from(form).reduce(
        (obj, [k, v]) => ({ ...obj, [k]: v }),
        {}
      );

      const resp = await fetch(BASEURL + url + (id ? "/" + id : ""), {
        method: id ? "PUT" : "POST",
        headers,
        body: JSON.stringify(body)
      });

      const newDocument = await resp.json();

      if (id) {
        //update
        const updateData = data.map(o => {
          if (o.id === id) {
            return newDocument;
          }
          return o;
        });
        setData(updateData);
      } else {
        //Insert
        setData(data => [...data, newDocument]);
      }

      setSaving(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setSaving(false);
    }
  }

  async function get(id) {
    if (!id) return;
    try {
      setLoading(true);
      setError(false);
      const resp = await fetch(BASEURL + url + "/" + id);
      const obj = await resp.json();
      setLoading(false);
      return obj;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  async function remove(id) {
    if (!id) return;
    try {
      setLoading(true);
      setError(false);
      const resp = await fetch(BASEURL + url + "/" + id, {
        method: "DELETE"
      });
      const obj = await resp.json();
      setLoading(false);
      setData(data.filter(o => o.id !== id));
      setLoading(false);
      return obj;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return {
    data,
    setData,
    save,
    get,
    saving,
    remove,
    loading,
    error
  };
}
