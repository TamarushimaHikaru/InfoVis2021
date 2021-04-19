class Vec3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    min() {
        var i = this.x;
        if (i.value >= this.y.value) {
            i = this.y;
        }
        if (i.value >= this.z.value) {
            i = this.z;
        }
        return i;
    }

    max() {
        var i = this.x;
        if (i.value <= this.y.value) {
            i = this.y;
        }
        if (i.value <= this.z.value) {
            i = this.z;
        }
        return i;
    }

    mid() {
        var i = this.x;
        var m = this.y;
        if (i.value >= m.value) {
            m = i;
            i = this.y;
        }
        if (i.value >= this.z.value) {
            m = i;
            i = this.z;
        }
        else {
            if (m.value >= this.z.value) {
                m = this.z;
            }
        }
        return m;
    }
}