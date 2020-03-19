import config from '../config'

export function api(url) {
  const APIBASEURL = config.APIBASEURL

  async function list(){
    const res = await fetch(APIBASEURL + url, {
      cache: "default"
    });

    return await res.json();

  }
  async function saveForm(form, id, data) {
    try {
      const headers = { "Content-Type": "application/json" };
      const body = Array.from(form).reduce(
        (obj, [k, v]) => ({ ...obj, [k]: v }),
        {}
      );

      const resp = await fetch(APIBASEURL + url + (id ? "/" + id : ""), {
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
        return updateData
      } else {
        //Insert
        return [...data, newDocument];
      }

    } catch (error) {
    }
  }

  async function get(id) {
    if (!id) return;
    try {
      const resp = await fetch(APIBASEURL + url + "/" + id);
      const obj = await resp.json();
      return obj;
    } catch (error) {
    }
  }

  async function remove(id, data) {
    if (!id) return;
    try {
      const resp = await fetch(APIBASEURL + url + "/" + id, {
        method: "DELETE"
      });
      await resp.json();
      return data.filter(o => o.id !== id);
    } catch (error) {

    }
  }

  return {
    list,
    saveForm,
    get,
    remove,
  };
}
