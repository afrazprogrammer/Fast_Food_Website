# Fast_Food_Website

<table>
{% for item, detail in data.items %}
    <table>
        <tr>
            <th>{{item}}</th>
        </tr>
        <tr>
            {% for i in detail %}
            <td>{{i}}</td>
            {% endfor %}
        </tr>
        {% if request.session.type == "e" %}
        <button>Order Complete</button>
        {% endif %}
    </table>
{% endfor %}
</table>